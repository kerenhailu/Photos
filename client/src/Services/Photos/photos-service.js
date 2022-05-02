const basic_url =
process.env.NODE_ENV === "production"
  ? "https://final-on-it-project.herokuapp.com/news"
  : "http://localhost:3010/photos";

export const GetAllPhotos = async () => {
  try {
    return await fetch(`${basic_url}`, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.log("error in method get");
  }
};