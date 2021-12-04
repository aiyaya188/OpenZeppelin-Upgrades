# Basic Sample Hardhat Project
使用OpenZeppelin Upgrades插件部署的智能合约可以被升级，可以在保留其地址、状态和余额下，修改其合约代码，同时。这允许你迭代地将新功能添加到项目中，或修复你在生产中可能发现的任何错误。

在本教程中，我们将展示使用OpenZeppelin Hardhat Upgrades和Gnosis Safe多签钱包，进行合约创建、测试和部署，以及使用Gnosis Safe多签升级，教程包含以下内容：

创建一个可升级的合约
在本地测试该合约
将合约部署到公共网络上
将升级的控制权转移到Gnosis 多签账号中
创建新的实现版本
在本地测试升级
部署新的实现
升级合约
文字说明：
英文版（原版）：https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-hardhat/3580
中文版（翻译）：https://learnblockchain.cn/article/3103
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
