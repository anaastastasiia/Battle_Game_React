import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Repository from "../components/RepositoryComponent/Repository";
import Button from '@mui/material/Button';

const RepositoreDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return <>
        <Repository id={id} />
        <Button variant="contained" onClick={goToHome}>GO TO HOME</Button>
    </>
}

export default RepositoreDetailsPage;