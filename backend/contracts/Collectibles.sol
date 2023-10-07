// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
contract Collectibles{
    struct Collectible_struct{
        IERC721 nft;
        uint256 token_Id;
        address payable owner;
        uint256 price;
        bool forSale;
    }
    address payable public owner;
    
    mapping(uint256=> Collectible_struct) public collectibles;

    constructor(){
         owner = payable(msg.sender);
    }
    modifier onlyOwner(){
        require(msg.sender == owner, "Only admin can perform this action");
        _;
    }
    function listCollectible(uint256 price, uint256 tokenId, IERC721 nft) external{
        collectibles[tokenId] = Collectible_struct(nft,tokenId,payable(msg.sender),price,true);
        nft.transferFrom(msg.sender,address(this),tokenId);
    }

    // function buyCollectibles(uint256 tokenId) external payable{
    //     Collectible_struct storage obj = collectibles[tokenId];
    //     require(obj.forSale,"Collectible is already sold");
    //     require(msg.value >= obj.price, "Not sufficient amount");
    //     collectibles[tokenId].nft.transferFrom(address(this),payable(msg.sender),tokenId);
    //     address payable prev_Owner = obj.owner;
    //     obj.owner = payable(msg.sender);
    //     obj.forSale = false;
    //     prev_Owner.transfer(msg.value);

    // }


    function buyCollectibles(uint256 tokenId) external payable {
    Collectible_struct storage obj = collectibles[tokenId];
    require(obj.forSale, "Collectible is already sold");
    require(msg.value >= obj.price, "Not sufficient amount");

    uint256 ownerFund = (msg.value * 10) / 100; 
    uint256 remainingAmount = msg.value - ownerFund;
    address payable prev_Owner = obj.owner;
    obj.owner = payable(msg.sender);
    obj.forSale = false;

   
    collectibles[tokenId].nft.transferFrom(address(this), payable(msg.sender), tokenId);

    owner.transfer(ownerFund);

    prev_Owner.transfer(remainingAmount);
}


    function deleteItem(uint256 tokenId) external onlyOwner{
          delete collectibles[tokenId];    
    }
}