import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Add() {

    const navi = useNavigate();

    const {userId} = useParams();

    const {register, handleSubmit} = useForm({defaultValues:(
        async ()=>(await axios.get(`http://localhost:5000/users/${userId}`)).data
    )});

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/show')
        
    }

    return (
        <center>
        <div>
            <form onSubmit={handleSubmit(saveData)}>
                <label htmlFor='r'>ROLL:</label>
                <input type='number' id='r'{...register('roll')}/>
                <br/> <br/>
                <label htmlFor='n'>NAME:</label>
                <input type='text' id='n' {...register('name')}/>
                <br/> <br/>
                <button type='submit'>ADD USER</button>
                <button type='reset'>RESET USER</button>
            </form>
        </div>
        </center>
    )
    }

    export default Add