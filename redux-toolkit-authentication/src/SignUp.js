import React, { useState } from "react";
import styled from "styled-components";
import styles from "./SignUp.module.css";

export const SignUp = () => {
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

      const handleSubmit=()=>{
           console.table(name,email,password)
      }

  return (
    <div>
      <div className={styles.signupWrapper}>
        <div className={styles.signupDiv}>
          <div className={styles.signupImage}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.W4JwOf9fsiNIwPhyOyHfnQHaE4&pid=Api&P=0"
              alt="SIGN UP"
            />
          </div>
          <h2> Start Your Journey</h2>
          <form>
            <div className={styles.formWrapper}>
              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="fullname">Full_Name</label>
                </InsideDiv>
                <InsideDiv>
                  <input
                    className={styles.inputWrapper}
                    type="text"
                    name="fullname"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </InsideDiv>
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="email">Email</label>
                </InsideDiv>
                <InsideDiv>
                  <input
                    className={styles.inputWrapper}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </InsideDiv>
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="password">Password</label>
                </InsideDiv>
                <InsideDiv>
                  <input
                    className={styles.inputWrapper}
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </InsideDiv>
              </div>

              <FormButtonDiv>
                <button className={styles.btn} 
                onClick={handleSubmit}
                >
                  SignUp
                </button>
              </FormButtonDiv>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const InsideDiv = styled.div`
  display: flex;
  justify-content: start;
  font-size: 15px;
`;

const FormButtonDiv = styled.div`
  width: 70%;
`;
