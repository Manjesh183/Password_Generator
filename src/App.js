// App.js
import React, { useState } from "react";

const containerStyle = {
	maxWidth: "30%",
  
	margin: "1rem",
	padding: "20px",
	border: "1px solid #ccc",
	borderRadius: "8px",
	boxShadow: "0px 0px 10px 0px grey",
};

const inputContainerStyle = {
	display: "flex",
	alignItems: "center",
	marginBottom: "10px",
};

const labelStyle = {
	flex: "1",
};

const inputStyle = {
	padding: "5px",
	border: "1px solid #ccc",
	borderRadius: "3px",
};

const checkboxContainerStyle = {
	display: "flex",
	alignItems: "center",
	marginBottom: "5px",
};

const buttonStyle = {
	padding: "10px 15px",
	backgroundColor: "#007bff",
	color: "#fff",
	border: "none",
	borderRadius: "5px",
	cursor: "pointer",
	transition: "background-color 0.2s ease-in-out",
};

const copyButtonStyle = {
	marginLeft: "10px",
};

const App = () => {
	const [password, setPassword] = useState("");
	const [passwordLength, setPasswordLength] = useState(12);
	const [useSymbols, setUseSymbols] = useState(true);
	const [useNumbers, setUseNumbers] = useState(true);
	const [useLowerCase, setUseLowerCase] = useState(true);
	const [useUpperCase, setUseUpperCase] = useState(true);
	const [successMessage, setSuccessMessage] = useState("");

	const generatePassword = () => {
		let charset = "";
		let newPassword = "";

		if (useSymbols) charset += "!@#$%^&*()";
		if (useNumbers) charset += "0123456789";//now symbols & Numbersboth adds up
		if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";//sym,Nums,UpperCap adds up
		if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//at last charset becomes sum of all 4
		for (let i = 0; i < passwordLength; i++) {
			newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
		}

		setPassword(newPassword);
	};

	// const copyToClipboard = () => {
	// 	const el = document.createElement("textarea");
	// 	el.value = password;
	// 	document.body.appendChild(el);
	// 	el.select();
	// 	document.execCommand("copy");
	// 	document.body.removeChild(el);
	// 	setSuccessMessage("Password copied to clipboard!");
	// 	setTimeout(() => setSuccessMessage(""), 2000);
	// 	// Hide message after 2 seconds
	// };
  function copyPass() {
    // Get the text field
    var copyText = document.getElementById("myInput");
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

	return (
		<div style={containerStyle}>
			<h1
				style={{
					color: "blue",
					textAlign: "center",
				}}
			>
				Welcome to my
			</h1>
			<h3 style={{ textAlign: "center" }}>Random Password Generator</h3>
			<div style={inputContainerStyle}>
				<label style={labelStyle}>Password Length:</label>
				<input
					type="number"
					min="8"
					max="32"
					value={passwordLength}
					onChange={(e) => setPasswordLength(e.target.value)}
					style={inputStyle}
				/>
			</div>
			<div style={checkboxContainerStyle}>
				<label>
					<input
						type="checkbox"
						checked={useSymbols}
						onChange={() => setUseSymbols(!useSymbols)}
            //!useSymbols means false gets true
					/>
					Symbols
				</label>
				<label>
					<input
						type="checkbox"
						checked={useNumbers}
						onChange={() => setUseNumbers(!useNumbers)}
					/>
					Numbers
				</label>
				<label>
					<input
						type="checkbox"
						checked={useLowerCase}
						onChange={() => setUseLowerCase(!useLowerCase)}
					/>
					LowerCase
				</label>
				<label>
					<input
						type="checkbox"
						checked={useUpperCase}
						onChange={() => setUseUpperCase(!useUpperCase)}
					/>
					UpperCase
				</label>
			</div>
			<button style={buttonStyle} onClick={generatePassword}>
				Generate Password
			</button>
			{password && (
				<div style={inputContainerStyle}>
					<label style={labelStyle}>Generated Password:</label>
					<input id="myInput" type="text" value={password} readOnly style={inputStyle} />
					<button
						style={{
							...buttonStyle,
							...copyButtonStyle,
						}}
						onClick={copyPass}
					>
						Copy
					</button>
				</div>
			)}
			{successMessage && (
				<p
					style={{
						color: "green",
						textAlign: "center",
					}}
				>
					{successMessage}
				</p>
			)}
		</div>
	);
};

export default App;

