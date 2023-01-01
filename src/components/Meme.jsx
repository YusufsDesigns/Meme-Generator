import '../style.css'
import { useState, useEffect } from 'react'

export default function Meme(){
    const [memes, setMemes] = useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMeme(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
        
        return () => {

        }
    }, [])

    function getMemeImage(){
        const randomImage = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomImage].url
        setMemes(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMemes(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <>
            <div className='form'>
                <div className="form-group">
                    <input 
                        type="text"
                        onChange={handleChange} 
                        name="topText"
                        value={memes.topText}
                    />
                    <input 
                        type="text"
                        onChange={handleChange} 
                        name="bottomText"
                        value={memes.bottomText}
                    />
                </div>
                <input type="submit" value="Get a new meme image 🖼️" className='btn-submit' onClick={getMemeImage}/>
            </div>
            <div className="meme-image">
                <img src={memes.randomImage} alt="" />
                <h2 className="meme-text top">{memes.topText}</h2>
                <h2 className="meme-text bottom">{memes.bottomText}</h2>
            </div>
        </>
        
    )
}