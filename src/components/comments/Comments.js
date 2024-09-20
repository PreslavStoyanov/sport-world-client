import { useEffect, useState } from "react";
import CommentsService from "../../services/CommentsService";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { COMMENTS_URL } from "../../config";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const matchID = window.location.pathname.split('/').pop();

  const createComment = async (content) => {
    const requestBody = {
      content: content,
      matchID: matchID,
    };

    try {
      const response = await fetch(COMMENTS_URL, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to create comment");
      }

      const newComment = await response.json();
      setComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.error("Error creating comment:", error);
    } finally {
      setContent("");
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await CommentsService.listCommentsByMach(matchID);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [matchID]);

  return (
    <div className="comments">
      <div className="comments-title">Comments</div>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={createComment} />
      <div className="comments-container">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
