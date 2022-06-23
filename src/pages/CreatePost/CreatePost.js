import './CreatePost.css';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div>
            <h2> Criar post</h2>
            <p>
                Escreva sobre o que quiser!
            </p>
            <form onSubmit={handleSubmit} >
                <label>
                    <span>Título</span>
                    <input 
                        type="text" 
                        name="title" 
                        required="true" 
                        placeholder="Insira o título" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Imagem</span>
                    <input 
                        type="text" 
                        name="image" 
                        required="true" 
                        placeholder="Insira o URL da imagem" 
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label>
                    <span>Conteúdo:</span>
                    <textarea 
                        type="text" 
                        name="body" 
                        required="true" 
                        placeholder="Insira o conteúdo do post" 
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </label>
                <label>
                    <span>Tags:</span>
                    <input 
                        type="text" 
                        name="tags" 
                        required="true" 
                        placeholder="Insira as tags separadas por vírgula" 
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                <button className="btn">Criar</button>
                {/*
                    {!loading && <button className="btn">Criar</button>}
                {loading && <button className="btn" disable="true"><div className="loader"></div></button>}
                {error && <p className="error">{error}</p>}
                */}
            </form>
        </div>
    )
}
export default CreatePost;