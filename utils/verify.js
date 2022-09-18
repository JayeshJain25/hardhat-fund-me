const { run } = require("hardhat")

async function verify(contractAddress, args) {
  console.log("Verifying Contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructor: args,
    })
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

module.exports = { verify }
