//USER

// async function getUsers() {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
//           method: "post",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify({
//             query: userQuery,
//           }),
//         });
//         const data = await res.json();
//         console.log("DATA:", data);
//       } catch (error) {
//         console.log(`ERROR:${error}`);
//       }
//     }
