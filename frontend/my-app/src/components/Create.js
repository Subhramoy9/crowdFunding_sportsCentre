// import React from 'react'
import React, { useState } from 'react'
import { Row, Form, Button } from 'react-bootstrap'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { ethers } from "ethers";

const Create = ({nft,marketPlace}) => {

    const [image, setImage] = useState('');
    const [price, setPrice] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const projectId = "2Ur6PFWLh90eBEC2OZOkgwqqm31"
    const projectSecret = "3d329992dbf472bb68d03369176fd30f"
    const auth = 'Basic ' + btoa(projectId + ":" + projectSecret); 
    const client = ipfsHttpClient({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth
        }
    })
    const uploadToIPFS = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (typeof file !== 'undefined') {
            try {
                const reader = new FileReader();
                reader.onloadend = async () => {
                    const data = new Uint8Array(reader.result);
                    const result = await client.add(data);
                    console.log(result);
                    setImage(`https://subhramoy-nft.infura-ipfs.io/ipfs/${result.path}`);
                };
                reader.readAsArrayBuffer(file);
            } catch (err) {
                console.log(err);
            }
        }
    }

    const createNft = async()=>{
        try{

            const result = await client.add(JSON.stringify({image, price, name, description}))
            mintThenList(result)

        }catch(err){
            console.log("ipfs uri upload error: ", err);
        }
    }

    const mintThenList = async(result)=>{
        const uri = `https://subhramoy-nft.infura-ipfs.io/ipfs/${result.path}`;
        try{
            console.log('called');
             await(await nft.mint(uri));
            console.log("minted");
            // const response = await fetch(uri);
            // console.log(response.json());
             const id = await nft.tokenCount();
            // console.log('id generated')
            // console.log(id)
            const listingPrice = ethers.utils.parseEther(price.toString())
            console.log('Price converted')
            await(await marketPlace.listCollectible( listingPrice,id,nft.address)).wait()
            // console('item listed')
        }catch(err){
            console.log(err);
        }
        

    }

  return (
    <div className="container-fluid mt-5">
                <div className="row">
                    <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
                        <div className="content mx-auto">
                            <Row className="g-4">
                                <Form.Control
                                    type="file"
                                    required
                                    name="file"
                                    onChange={uploadToIPFS}
                                />
                                <Form.Control size="lg" required type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
                                <Form.Control size="lg" required as="textarea" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
                                <Form.Control size="lg" required type="number" placeholder="Price in ETH" onChange={(e)=>{setPrice(e.target.value)}}/>
                                <div className="d-grid px-0">
                                    <Button variant="primary" size="lg" onClick={createNft}>
                                        Create and List NFT!
                                    </Button>
                                </div>
                            </Row>
                        </div>
                    </main>
                </div>
            </div>
  )
}

export default Create




// https://subhramoy-nft.infura-ipfs.io/ipfs/QmaFYC8n4Tfwbbeh3EVWzeVruVmKvDU2PtY6Vh5auH8sht