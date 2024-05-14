// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


// Contract Code
contract MyToken {
    string public tokenName;
    string public tokenAbbreviation;
    uint public totalSupply;

    // Mapping to track balance of addresses
    mapping(address => uint) public balance;

    // Constructor to initialize the token with a token name_token Abbreviation, and total supply
    constructor(string memory _tokenName, string memory _tokenAbbreviation, uint _totalSupply) {
        tokenName = _tokenName;
        tokenAbbreviation = _tokenAbbreviation;
        totalSupply = _totalSupply;
        balance[msg.sender] = _totalSupply;
    }

    // Minting Code
    function mint(address _reciever, uint _value) public {
        totalSupply += _value;
        balance[_reciever] += _value;
    }

    // Burning Code
    function burn(address _sender, uint _value) public {
        require(balance[_sender] >= _value, "Insifficient balance");
        totalSupply -= _value;
        balance[_sender] -= _value;
    }
}
