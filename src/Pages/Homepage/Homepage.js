import React from "react";
import "./Homepage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="quiz">
      {/* Create New Quiz Card */}
      <Link to="/createQuiz">
        <div>
          <Card sx={{ maxWidth: 200, borderRadius: "10%" }}>
            <CardActionArea>
              <CardMedia component="img" image="m1.png" alt="green iguana" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  CREATE-NEW-QUIZ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Link>

      {/* My Quiz Card */}
      <Link to="/myQuiz">
        <div>
          <Card sx={{ maxWidth: 200, borderRadius: "10%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="w2.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {/* Text for displaying "MY QUIZ" */}
                  MY QUIZ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Link>

      {/* Play Quiz Card */}
      <Link to="/signup">
        <div>
          <Card sx={{ maxWidth: 200, borderRadius: "10%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="w3.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {/* Text for displaying "PLAY QUIZ" */}
                  PLAY QUIZ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Link>
    </div>
  );
}

export default Homepage;
