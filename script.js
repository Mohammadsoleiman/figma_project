//? Question 11
// const techTopics = [
//   {
//     title: "Artificial Intelligence",
//     description:
//       "AI is transforming industries with smart algorithms that learn and adapt.",
//     image: "image/one.jpeg",
//   },
//   {
//     title: "Blockchain Technology",
//     description:
//       "Decentralized ledgers powering cryptocurrencies and secure digital transactions.",
//       image: "image/two.jpeg",
//   },
//   {
//     title: "Quantum Computing",
//     description:
//       "Next-gen computing power using principles of quantum mechanics.",
//     image: "image/three.jpeg",
//   },
//   {
//     title: "Internet of Things (IoT)",
//     description:
//       "Connected devices exchanging data to automate and optimize tasks.",
//     image:"image/four.jpeg",
//   },
//   {
//     title: "Cybersecurity",
//     description:
//       "Protecting systems and data from digital threats and attacks.",
//     image: "image/five.jpeg",
//   },
//   {
//     title: "Cloud Computing",
//     description:
//       "On-demand computing services over the internet with scalable resources.",
//     image: "image/six.jpeg",
//   },
//   {
//     title: "Augmented Reality (AR)",
//     description:
//       "Blending virtual elements with the real world for enhanced experiences.",
//     image: "image/seven.jpeg",
//   },
//   {
//     title: "Machine Learning",
//     description:
//       "A subset of AI enabling systems to learn from data without being explicitly programmed.",
//     image: "image/eight.jpeg",
//   },
//   {
//     title: "5G Networks",
//     description:
//       "The latest generation of mobile networks offering ultra-fast data speeds and low latency.",
//     image: "image/nine.jpeg",
//   },
// ];

let allPosts = []; 

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    allPosts = posts; 
    displayPosts(allPosts.slice(0, 9)); 
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

function displayPosts(postsArray) {
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = ""; 
  postsArray.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post", "g-col-12", "col-sm-6", "col-md-4", "col-lg-4");

    postDiv.innerHTML = `
      <img src="https://picsum.photos/200/150?random=${post.id}" alt="Random Image">
      <h6>${post.title}</h6>
      <p style="font-size:14px">${post.body}</p>
    `;

    postsContainer.appendChild(postDiv);
  });
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
  const searchText = searchInput.value.toLowerCase();


  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchText) ||
      post.body.toLowerCase().includes(searchText)
  );


  displayPosts(filteredPosts.slice(0, 9));
});

fetchPosts();






