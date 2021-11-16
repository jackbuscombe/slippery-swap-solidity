// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISlipperyswap {
    function tokenSwap(address _tokenIn, address _tokenOut, uint _amountIn, uint _amountOutMin, address _to) external returns(bool);
    function ethInSwap(address _tokenOut, uint _amountOutMin, address _to) external returns (bool);
    function ethOutSwap(address _tokenIn, uint _amountIn, uint _amountOutMin, address _to) external returns (bool);
}