import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    IconButton,
    Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import "./About.scss";
import { requestData } from '../../container/dataService'

export const About = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        requestData('portfolio/en/about')
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/myBlogs/${id}`)
    }
    const handleDelete = () => {
        /* deleteRequest().then(data => console.log(data))
            .then(() => navigate("/myBlogs"))
            .then(() => navigate("/blogs")) */
    }
    const deleteRequest = async () => {
        /* const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/blog/${id}`)
            .catch(err => console.log(err))
        const data = await res.data;
        return data; */
    }
    return (
        <div className='wrapper'>
            {""}
            {data.map((about, index) => (
                <Box key={index} marginTop={10} marginRight={3}>
                    <Card sx={{
                        width: "100%",
                        marginLeft: '220px',
                        marginRight: "auto",
                        mt: 2,
                        padding: 2,
                        boxShadow: "5px 5px 10px #ccc",
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}>
                        <Box display="flex">
                            <IconButton
                                sx={{ marginLeft: "auto" }}
                                onClick={handleEdit}
                            >
                                <EditIcon color="warning" />
                            </IconButton>
                            <IconButton
                                onClick={handleDelete}
                            ><DeleteForeverIcon color="error" />
                            </IconButton>
                        </Box>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                    {about.userName ? about.userName.charAt(0) : ""}
                                </Avatar>
                            }
                            title={about.title}
                            subheader={new Date(about.updatedAt).toLocaleString('pt-BR')}
                        />
                        <CardContent>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: "tween" }}
                                className="app__profile-item"
                            >
                                <img src={about.imgUrl} alt={about.title} />
                                <h2 className="bold-text" style={{ marginTop: 20 }}>
                                    {about.title}
                                </h2>
                                <p className="p-text" style={{ marginTop: 10 }}>
                                    {about.description}
                                </p>
                            </motion.div>
                        </CardContent>
                    </Card>
                </Box>
            ))
            }
        </div>
    );
}

export default About