
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your NFTs
const NFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the NFTs array above.
function mintNFT(_name, _eyecolor, _shirtType, _bling) {
    const NFT = {
        "name": _name,
        "eyecolor": _eyecolor,
        "shirtType": _shirtType,
        "bling": _bling
    };
    NFTs.push(NFT); // Push the NFT object into the NFTs array
    console.log("Minted: " + _name);
}

// Create a "loop" that will go through the array of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Eyecolor: \t" + NFTs[i].eyecolor);
        console.log("Shirt Type: \t" + NFTs[i].shirtType);
        console.log("Bling: \t\t" + NFTs[i].bling);
    }
}

// Print the total number of NFTs minted
function getTotalSupply() {
    console.log("\nTotal NFTs minted: " + NFTs.length);
}

// Call the functions to mint NFTs and display the results
mintNFT("Bob", "Blue", "Hoodie", "Gold chain");
mintNFT("Sue", "Green", "T-shirt", "Silver necklace");
mintNFT("Tim", "Brown", "Sweater", "Diamond ring");
mintNFT("Jogn", "Hazel", "Jacket", "Ruby bracelet");

listNFTs();
getTotalSupply();
