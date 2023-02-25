import React from "react";
import styled from "styled-components";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div>
      <div className={styles.loginWrapper}>
        <div className={styles.loginDiv}>
          <div className={styles.loginImage}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.W4JwOf9fsiNIwPhyOyHfnQHaE4&pid=Api&P=0"
              alt="FACE PREP"
            />
          </div>
          <h2> Start Your Journey</h2>
          <form>
            <div className={styles.formWrapper}>
              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="email">Email</label>
                </InsideDiv>
                <InsideDiv>
                  <input
                    className={styles.inputWrapper}
                    type="email"
                    name="email"
                    // onChange={handleChange}
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
                    // onChange={handleChange}
                  />
                </InsideDiv>
              </div>

              <FormButtonDiv>
                <button className={styles.btn} 
                // onClick={handleSubmit}
                >
                  LOGIN
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
