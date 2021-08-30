import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts/";

//Axios post method

async function AxiosPostRequest() {
	const response = await axios.post(url, {
		title: "foot",
		body: "bart",
		userId: 1,
	});

	console.log(response.data);
}

AxiosPostRequest();

async function AxiosPutRequest() {
	//Axios put method
	const response = await axios.put(url + 1, {
		id: 1,
		title: "foot",
		body: "bart",
		userId: 1,
	});
	console.log(response.data);
}

AxiosPutRequest();

function AxiosDeleteRequest() {
	axios.delete(url + 1);
}

AxiosDeleteRequest();

// async function postRequest() {
// 	// url used
// 	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
// 		method: "POST",
// 		body: JSON.stringify({
// 			title: "foo",
// 			body: "bar",
// 			userId: 1,
// 		}),
// 		headers: {
// 			"Content-type": "application/json; charset=UTF-8",
// 		},
// 	});
// 	const json = await response.json();
// 	console.log(json);
// }

// postRequest();

// // using fetch
// async function putRequest() {
// 	// GET is the default method
// 	const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
// 		method: "PUT",
// 		body: JSON.stringify({
// 			id: 1,
// 			title: "foot",
// 			body: "bart",
// 			userId: 1,
// 		}),
// 		headers: {
// 			"Content-type": "application/json; charset=UTF-8",
// 		},
// 	});
// 	const json = await response.json();
// 	console.log(json);
// }

// putRequest();

// function deleteRequest() {
// 	fetch("https://jsonplaceholder.typicode.com/posts/1", {
// 		method: "DELETE",
// 	});
// }

// deleteRequest();
