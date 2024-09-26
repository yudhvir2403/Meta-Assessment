# Meta-Assessment: NFT Collection

## Project Description

Meta-Assessment is a simple JavaScript project that simulates the creation and management of a small NFT (Non-Fungible Token) collection. This project is designed to help you understand the basics of handling arrays and objects in JavaScript, as well as practicing function creation and usage.

## Features

- **Mint NFTs**: Create new NFTs with specified metadata.
- **List NFTs**: Display all the NFTs in the collection with their metadata.
- **Get Total Supply**: Return the total number of NFTs created.

## Code Overview

### Variables

- `NFTs`: An array that holds all the minted NFT objects.

### Functions

1. **mintNFT(_name, _eyecolor, _shirtType, _bling)**:
    - Creates an NFT object with the given parameters as metadata.
    - Adds the created NFT to the `NFTs` array.
    - Logs a message to the console indicating the NFT has been minted.

2. **listNFTs()**:
    - Iterates through the `NFTs` array.
    - Logs each NFT's metadata to the console.

3. **getTotalSupply()**:
    - Logs the total number of minted NFTs to the console.

## Usage

To use this project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/Meta-Assessment.git
    ```

2. **Navigate to the project directory**:
    ```sh
    cd Meta-Assessment
    ```

3. **Run the script**:
    Open the `NFT Collection.js` file in a JavaScript environment (such as a browser console or Node.js).

4. **Mint NFTs**:
    Call the `mintNFT` function with appropriate arguments to create new NFTs. For example:
    ```js
    mintNFT("Dhruv", "Black", "shirt", "Non");
    mintNFT("Git", "Blue", "T-Shirt", "Gold Chain");
    ```

5. **List all NFTs**:
    Call the `listNFTs` function to print all NFT metadata to the console.
    ```js
    listNFTs();
    ```

6. **Get total supply**:
    Call the `getTotalSupply` function to print the number of minted NFTs to the console.
    ```js
    getTotalSupply();
    ```

## Example

Here is an example of how to use the functions:

```js
mintNFT("Yudhvir", "Black", "shirt", "Non");
mintNFT("Git", "Blue", "T-Shirt", "Gold Chain");
mintNFT("MetaChris", "Green", "Hoodie", "Silver Ring");
mintNFT("Loom", "Brown", "Jacket", "Diamond Earrings");

listNFTs();
getTotalSupply();
```

This will output:
```
Minted: Dhruv
Minted: Git
Minted: MetaChris
Minted: Loom

ID:         1
Name:       Yudhvir
eyeColor:   Black
shirtType:  shirt
Bling:      Non

ID:         2
Name:       Git
eyeColor:   Blue
shirtType:  T-Shirt
Bling:      Gold Chain

ID:         3
Name:       MetaChris
eyeColor:   Green
shirtType:  Hoodie
Bling:      Silver Ring

ID:         4
Name:       Loom
eyeColor:   Brown
shirtType:  Jacket
Bling:      Diamond Earrings

4
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me at rajput850singh@gmail.com

---

Happy minting! 🚀
