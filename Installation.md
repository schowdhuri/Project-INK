# How to install dependencies and run the project

This process is long and tedious, but, there is no way around it. If you have one, please send a `pull request`.

## Installing NodeJs

The first thing you'll have to do is, install [NodeJs](https://nodejs.org/en/)

## Installing Truffle Framework

We are using a framework called [Truffle](https://truffleframework.com/), since it provides a lot features to develop decentralized applications out-of-the-box.

To install [Truffle](https://truffleframework.com/), run,

`npm install -g truffle`

## Setting up Truffle Unbox

We are using a Truffle Boilerplate called [React-Uport Box](https://truffleframework.com/boxes/react-uport). To install this box, firstly, create an empty folder using:

`mkdir INK`

then, go into this directory,

`cd INK`

Now, run the following command to setup the `React-Uport Box`,

`truffle unbox react-uport`

## Cloning Git Repository

Clone the repository into an empty directory by running command,

`git clone https://github.com/ishanjoshi02/Project-INK.git temp`

This will clone the repository code into a new folder called temp.

## Copy files from `temp` to `INK`

Copy all the files that are present in `temp` folder into `INK` folder.

## Getting uPort key

1. To get the `uPort` key, go on over to [uPort App Manager](https://appmanager.uport.me/), and, create your uPort Identity if you don't have one.
2. Next create a project called `INK`.
3. Leave all other fields blank.
4. Save changes to initalize the project.
5. Scan the QR Code again.
6. Click on `Click Here for App Code`.
7. Copy the code inside `SimpleSigner` function. It should resemble something like `5e75f3b9cef1edc5820fdcaa6221ec18c25938155d8622745243d6a80cxxxxxx`
8. Also copy `clientId`.
9. Go to your `INK/src` folder
10. Create a new file called `key/uportkeys.js`
11. Paste the copied `SimpleSigner` and `clientId` (Change the key to the one you got the previous step)

```javascript
export const SigningKey =
  "5e75f3b9cef1edc5820fdcaa6221ec18c25938155d8622745243d6a80cxxxxxx";
```

11. Now you can run your project

## Run the project

`npm run start`

### Why the long process

The simple way to install `node`-based projects is to `clone` them and run `npm install` to install all the dependencies.

But, in our case, the newer version of the `node-modules` such as `uport-connect` and `web3` are not cohesive together. Thus, the `unbox` command takes care of the correct dependencies, and `git clone` takes care of importing the existing code base.

After setting this up, you can use the directory like any other `git` directory and can run all `git` commands.
