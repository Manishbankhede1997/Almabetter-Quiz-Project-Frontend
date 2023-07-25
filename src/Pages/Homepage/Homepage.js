import React from "react";
import "./Homepage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function Homepage() {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div className="quiz">
      {/* Create New Quiz Card */}
      <Link to="/createQuiz" style={linkStyle}>
        <Card sx={{ maxWidth: 240, borderRadius: "10%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://us.123rf.com/450wm/miniwide/miniwide2108/miniwide210800018/172561213-a-man-is-reading-a-book-at-his-desk-with-books-stacked-next-to-him-outline-simple-vector.jpg?ver=6"
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                CREATE-NEW-QUIZ
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>

      {/* My Quiz Card */}
      <Link to="/myQuiz" style={linkStyle}>
        <Card sx={{ maxWidth: 240, borderRadius: "10%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://us.123rf.com/450wm/amruid/amruid2108/amruid210800004/172700430-kid-children-boy-study-learning-and-writing-fun-illustration.jpg?ver=6"
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {/* Text for displaying "MY QUIZ" */}
                MY-QUIZ
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>

      {/* Play Quiz Card */}
      <Link to="/signup" style={linkStyle}>
        <Card sx={{ maxWidth: 250, padding: "10px 0px", borderRadius: "10%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhjRwaw5hHzDZdUTzuE7weofZ73qWril9eu60EPntIMsd4pr-jU-g0IvPL_9P50W6haE&usqp=CAU"
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {/* Text for displaying "PLAY QUIZ" */}
                PLAY-QUIZ
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}

export default Homepage;
