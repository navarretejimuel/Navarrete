// create a variable to hold your NFT's
let totalNFTs = 0;
const nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, age, height, weight) {
    const newNFT = {
        name: name,
        age: age,
        height: height,
        weight: weight,
    };
    nftCollection.push(newNFT);
    totalNFTs++;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("Listing all NFTs:");
    nftCollection.forEach((nft, index) => {
        console.log("NFT " + (index + 1) + ":");
        console.log("Name: " + nft.name);
        console.log("Age: " + nft.age);
        console.log("Height: " + nft.height);
        console.log("Weight: " + nft.weight);
        console.log("-------------");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs: " + totalNFTs);
}

// call your functions below this line
mintNFT("Christian Orias", "20", "176cm", "62kg");
mintNFT("Randel Ortega", "25", "165", "47kg");
mintNFT("Franz Sulibio", "20", "155cm", "90kg");

listNFTs();
getTotalSupply();
