export interface TechIcon {
  type: string
  className?: string
}

export interface Project {
  title: string
  date: string
  techStack: TechIcon[]
  desc: string
}



