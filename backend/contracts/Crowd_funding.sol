// SPDX-License-Identifier: MIT

contract Crowd_funding{
    struct fundItem{
        address owner;
        uint256 goalAmount;
    }

    mapping(uint256=>fundItem) public fund_list;
    mapping(address=>uint256) public contributors;

    function listItem(uint256 _id, uint256 amount) external{

       fund_list[_id] = fundItem(msg.sender, amount);
    }

    function contribute(uint256 tokenId) external payable{

            fundItem storage obj = fund_list[tokenId];
            require(obj.goalAmount >= 0, "Goal amount achieved");
            require(msg.value <= obj.goalAmount, "Goal amount exceeded");
            contributors[msg.sender] += msg.value;
            obj.goalAmount -= msg.value;
    }

    
}