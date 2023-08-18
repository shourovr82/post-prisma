import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPostController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.send({
      success: true,
      message: "Post Created Successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await PostService.getAllPosts(options);
    res.send({
      success: true,
      message: "All Post Retrieved Successfully !",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getSinglePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Post Retrieved Successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const updatePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params?.id);
  const data = req.body;
  try {
    const result = await PostService.updatePost(id, data);
    res.send({
      success: true,
      message: "Post updated Successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const deletePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.deletePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Post deleted Successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
//

export const PostController = {
  createPostController,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
