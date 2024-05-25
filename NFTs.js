
const NFTs=[];
function mintNFT (_name,_hight,_weight,_age) {

  const NFT={
    "name":_name,
    "height":_hight,
    "weight":_weight,
    "age":_age

  };
  NFTs.push(NFT);
  console.log("Minted:"+_name);


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(let i=0;i<NFTs.length;i++)
    {
       console.log("\nID: "+(i+1));
      console.log("Name: "+NFTs[i].name); 
      console.log("Height: "+NFTs[i].height);
       console.log("Weight: "+NFTs[i].weight);
       console.log("Age: "+NFTs[i].age);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\n"+NFTs.length);

}

// call your functions below this line
mintNFT("sachin",11,50,20);
// listNFTs();
// getTotalSupply();
mintNFT("rohit",13,60,24);
listNFTs();
getTotalSupply();
