import React, { useState } from 'react'
import './contact.css'
import { Box, Button, TextField, Typography, useTheme } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const theme = useTheme();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  })
  const [loading, setLoading] = useState(false);
  // @ts-ignore
  const formRef = useRef();
  //template_x9t11pj
  //service_shmoyyl
  //5TevgcGpPh3pyno_o
  const handelSubmit = (e)=>{
    e.preventDefault();
    setLoading(true)
    emailjs.send('service_shmoyyl', 'template_x9t11pj',
      {
        from_name: form.name,
        from_email: form.email,
        to_name: 'Engi Eid',
        to_email: 'engieid6@gmail.com',
        message: form.message
      },
      '5TevgcGpPh3pyno_o'
    )
    .then(() =>{
      setLoading(false)
      alert("Thank you. I will get back to you as soon as possible.")

      // reset form
      setForm({
        name: '',
        email: '',
        message: ''
      })

    }, (error)=>{
      setLoading(false)
      console.log(error)
      alert('Something went wrong!')
    })

  };
  
  const handelChange = (e)=>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  };

  return (
    <Box className='contact'>
      <div className="contact_title">
        <Typography color={theme.palette.text.secondary} variant='body2'>GET IN TOUCH</Typography>
        <Typography variant='h4' fontWeight={700}>Contact.</Typography>
      </div>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { mt:2 , width: {sm:'25ch', md:'50ch'} } }}
        style={{display:'flex', flexDirection:"column"}} ref={formRef} onSubmit={handelSubmit}
        noValidate
        autoComplete="off">
              <TextField
                id="filled-multiline-flexible"
                label="Your Name"
                multiline
                maxRows={4}
                variant="outlined"
                name='name'
                value={form.name}
                onChange={handelChange}
              />
              <TextField
                id="filled-textarea"
                label="Your Email"
                multiline
                variant="outlined"
                type='email'
                name='email'
                value={form.email}
                onChange={handelChange}
              />
              <TextField
                id="filled-multiline-static"
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                type='textarea'
                name='message'
                value={form.message}
                onChange={handelChange}
              />
              <Button type='submit' sx={{width: '8rem', mt: 3, color: "#fff", backgroundColor: "#22b0c9ff"}} variant="contained" endIcon={<SendIcon />}>{loading? 'Sending...':'Send'}</Button>
      </Box>
    </Box>
  )
}