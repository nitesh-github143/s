import { useState } from "react";
import style from "./LoginScreen.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import your logo image
import logoImage from "./icon-384x384.png"; // Replace with your actual image path

const LoginScreen = () => {
  const naviget = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authStatus, setAuthStatus] = useState("");

  useEffect(() => {
    // Function to update screen dimensions on resize
    const updateDimensions = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    // Event listener to handle resize
    window.addEventListener("resize", updateDimensions);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const horizontal = () => {
    const horizontal = screenWidth / 50;

    const elements = [];

    for (let index = 0; index < horizontal; index++) {
      elements.push(
        <div
          key={index}
          className={`boxColor`}
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: "#1f1f1f",
            marginRight: "4px",
            display: "inline-block",
          }}
        ></div>
      );
    }
    return elements;
  };

  const showBoxes = () => {
    const vertical = screenHeight / 50;

    const elements = [];

    for (let index = 0; index < vertical; index++) {
      elements.push(
        <div key={index} className={style.boxCover}>
          {horizontal()}
        </div>
      );
    }
    return elements;
  };

  function resetBoxColor(element) {
    element.style.backgroundColor = "#1f1f1f";
  }

  const handleLoginClick = () => {
    if (username === "admin" && password === "123") {
      setAuthStatus("Authenticated");
      console.log("Authenticated");
      // Navigate to the dashboard page or any other page
      naviget("/dashboard");
    } else {
      setAuthStatus("Authentication failed");
      console.log("Authentication failed");
    }
  };

  useEffect(() => {
    // Attach hover event listener to all boxes
    const boxes = document.querySelectorAll(".boxColor");

    boxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "#ffffff"; // Change color on hover
      });

      box.addEventListener("mouseout", () => {
        // Revert color back to original after a delay (e.g., 1 second)
        setTimeout(() => {
          resetBoxColor(box);
        }, 400);
      });
    });
  }, []);

  return (
    <div className={style.fullScreen}>
      {showBoxes()}

      <div className={style.loginContainer}>
        <div className={style.loginContent}>
          {/* <h1 className={style.welcomeText}>PathaVan</h1> */}
          <img src={logoImage} alt="Logo" className={style.logo} />
          <form className={style.loginForm}>
            <input
              type="text"
              placeholder="Username"
              className={style.inputField}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={style.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className={style.loginButton} onClick={handleLoginClick}>
              Login
            </button>
          </form>
          <p className={style.authStatusMessage}>{authStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
