export interface Member$Response {
  id: number;
  firstName: string;
  lastName: string;
  occupation?: string;
  imageUrl?: string;
}

export interface Post$Response {
  id: number;
  title: string;
  imageUrl: string;
  videoUrl: string;
  author: string;
  published: string;
  summary: string;
  body: string;
}

const getMembers = async (): Promise<Member$Response[]> => await fetch('http://localhost:3003/members/').then(res => res.json());

const getMember = async (id: number): Promise<Member$Response> =>
  await fetch(`http://localhost:3003/members/${id}`).then(res => res.json());

const getPosts = async (): Promise<Post$Response[]> => await fetch('http://localhost:3003/posts/').then(res => res.json());

const getPost = async (id: number): Promise<Post$Response> => await fetch(`http://localhost:3003/posts/${id}`).then(res => res.json());

export default { getMembers, getMember, getPosts, getPost };
