import React from "react";
import "./Homepage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function Homepage() {
  return (
    <div className="quiz">
      <Link to="/createQuiz">
        <div>
          <Card sx={{ maxWidth: 200, borderRadius: "10%" }}>
            <CardActionArea>
              <CardMedia component="img" image="m1.png" alt="green iguana" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <Button>Create New Quiz</Button>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Link>

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
                  MY QUIZ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Link>
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
                  PLAY QUIZ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Link>
      {/* <div className="create-quiz">
        <button>Create New Quiz</button>
        <button>My Quiz</button>
      </div> */}
    </div>
  );
}

export default Homepage;
