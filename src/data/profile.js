export const profile = {
  name: "Sailen Sahoo",

  aiml: {
    title: "SAILEN_SAHOO.SYS",
    subtitle: "AIML_ENGINEER // NEURAL_ARCHITECT",
    image: "/MyImage.jpg",
    bio: "I don't just train models; I engineer them for reality. Focused on Computer Vision, Vector Embeddings, and Neural Networks. Architect behind Sat-X (utilizing Vision Transformers for satellite imagery super-resolution) and Digital Surveyor (YOLO and ZoeDepth for spatial analysis). I write the Python and FastAPI pipelines required to turn raw data into deployable intelligence.",
    skills: {
      "Machine Learning & Vision": [
        { name: "Computer Vision", level: 95 },
        { name: "YOLOv8 & Object Detection", level: 90 },
        { name: "Vision Transformers (ViT)", level: 85 },
        { name: "ZoeDepth", level: 78 },
      ],
      "NLP & Embeddings": [
        { name: "Large Language Models (LLMs)", level: 88 },
        { name: "Vector Embeddings", level: 85 },
        { name: "RAG Architectures", level: 82 },
        { name: "Multimodal LLMs", level: 75 },
      ],
      "Core Engineering": [
        { name: "Python", level: 95 },
        { name: "PyTorch & TensorFlow", level: 90 },
        { name: "FastAPI", level: 88 },
        { name: "Docker & GPU Pipelines", level: 82 },
      ]
    },
    graphNodes: [
      { id: "LLMs", group: 1, radius: 10 },
      { id: "Vector Space", group: 1, radius: 8 },
      { id: "RAG", group: 1, radius: 6 },
      { id: "ViT", group: 2, radius: 10 },
      { id: "YOLO", group: 2, radius: 8 },
      { id: "Depth Est.", group: 2, radius: 6 },
      { id: "FastAPI", group: 3, radius: 8 },
      { id: "CUDA", group: 3, radius: 6 }
    ],
    graphLinks: [
      { source: "LLMs", target: "Vector Space" },
      { source: "Vector Space", target: "RAG" },
      { source: "RAG", target: "LLMs" },
      { source: "ViT", target: "YOLO" },
      { source: "ViT", target: "Depth Est." },
      { source: "FastAPI", target: "LLMs" },
      { source: "FastAPI", target: "ViT" },
      { source: "CUDA", target: "ViT" },
      { source: "CUDA", target: "LLMs" },
    ],
    systemLogs: [
      { timestamp: "2026.04.14", message: "PORTFOLIO_v3.0_DEPLOYED", type: "success" },
      { timestamp: "2026.03.01", message: "SAT-X_PIPELINE_OPERATIONAL", type: "success" },
      { timestamp: "2025.11.15", message: "DIGITAL_SURVEYOR_YOLO_TRAINED", type: "info" },
      { timestamp: "2025.08.20", message: "ZOMATHON_EMBEDDINGS_GENERATED", type: "info" },
      { timestamp: "2025.05.10", message: "NEURAL_PATHWAY_INIT", type: "warning" },
    ],
  },

  fullstack: {
    title: "Sailen Sahoo",
    subtitle: "Full-Stack Developer",
    image: "/FullstackImage.jpg",
    bio: "Full-stack developer architecting high-performance web applications. I specialize in the MERN stack to build the delivery mechanisms for complex data. From developing fluid, optimized user interfaces to structuring robust database schemas, I build the bridge between heavy backend logic and seamless user experience.",
    skills: {
      "Frontend Architecture": [
        { name: "JavaScript / ES6+", level: 95 },
        { name: "React.js", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS & Framer Motion", level: 90 },
        { name: "Three.js / WebGL", level: 75 }
      ],
      "Backend & APIs": [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 87 },
        { name: "FastAPI", level: 85 },
        { name: "RESTful Architecture", level: 90 }
      ],
      "Database & Infrastructure": [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 72 },
        { name: "Docker & CI/CD", level: 78 }
      ]
    }
  },

  social: {
    github: { url: "https://github.com/13thAline", label: "GitHub" },
    linkedin: { url: "https://www.linkedin.com/in/sailen-sahoo-030179327/", label: "LinkedIn" },
    email: { url: "mailto:sahoosailen13@gmail.com", label: "sahoosailen13@gmail.com" },
  },
};
