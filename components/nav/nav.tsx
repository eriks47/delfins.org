import styles from "./Nav.module.css";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';



import { supabase } from "../../services/supabaseClient";
async function a(s){
    const { data, error } = await supabase.from('questions').select().textSearch('content', s);
    console.log(data);
    if (error){
        console.log(error);
    }
    }
export default function Nav({changePosts}){
    return (
        <ul className={styles.ul}>
            <li className={styles.li}><a href="default.asp"><SearchIcon/></a></li>
            <li className={styles.li}><a href="default.asp">Home</a></li>
            <li className={styles.li}><a href="news.asp">News</a></li>
            <li className={styles.li}><a href="contact.asp">Contact</a></li>
            <li className={styles.li}><a href="about.asp">About</a></li>
            <li className={styles.in}>
                <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <SearchIcon />
                    </InputAdornment>
                    }
                    />
            </li>


        </ul>
    );
}