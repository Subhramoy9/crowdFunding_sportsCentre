// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Collectible_nft is ERC721URIStorage {
    uint256 public tokenCount = 0;

    constructor() ERC721("DApp NFT", "DAPP") {}

    function mint(string memory _tokenURI) external returns (uint256) {
        tokenCount++;
        uint256 tokenId = tokenCount;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        _setApprovalForAll(msg.sender,address(this), true);
        return tokenId;
    }
}
