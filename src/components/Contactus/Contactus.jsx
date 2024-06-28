import styles from './Contactus.module.css';


function Contactus() {
  return (
    <div className={`container ${styles.contact_sec}`}>
        <h1>
            Contact US
        </h1>
        <p>
        LET’S CONNECT: WE’RE HERE TO HELP, 
        AND WE’D LOVE TO HEAR FROM YOU! WHETHER 
        YOU HAVE A QUESTION, COMMENT, OR JUST
        WANT TO CHAT , YOU CAN REACH OUT TO US
        THROUGH THE CONTACT FORM OF THIS PAGE,
        OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
        </p>
    </div>
  );
};

export default Contactus;