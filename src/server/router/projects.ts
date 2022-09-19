import { createRouter } from "./context";

export const projectsRouter = createRouter().query("getAll", {
  async resolve({ ctx }) {
    console.log({ ctx });

    const projects = [
      {
        id: (Math.random() * 100).toFixed(),
        name: "Project name",
        owner: "Edwin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: (Math.random() * 100).toFixed(),
        name: "Project name",
        owner: "Edwin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: (Math.random() * 100).toFixed(),
        name: "Project name",
        owner: "Edwin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return projects;
    // return await ctx.prisma.example.findMany();
  },
});
