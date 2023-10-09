import { Box } from "@mui/material";

const LoginTextField = (props) => {

    return <div
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            borderRadius: '0.75rem',
            backgroundColor: 'var(--color-primary-light-2)',
            padding: '1rem 1.5rem',
            minWidth: '20rem',

        }}
    >
        <span 
        style={{
            color:'var(--color-info-dark)',
            fontSize: '1rem'
        }}
        class="material-symbols-outlined">
            {props.icon}
        </span>
        <input
            style={{
                outline: 'none',
                border: 'none',
                background: 'none',
            }}
            type={props.type}
            placeholder={props.placeholder}
        />

    </div>


}


export { LoginTextField }; 