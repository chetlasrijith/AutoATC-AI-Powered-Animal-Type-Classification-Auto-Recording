import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Srijith Chetla",
    role: "AI/ML Lead",
    bio: "Computer vision specialist with focus on agricultural AI",
    avatar: "SC",
  },
  {
    name: "G Sai Ganesh",
    role: "Backend Engineer",
    bio: "Full-stack developer with expertise in FastAPI and cloud infrastructure",
    avatar: "SG",
  },
  {
    name: "A. Abhiram",
    role: "Domain Expert",
    bio: "Veterinary scientist & ICAR classification standards advisor",
    avatar: "AA",
  },
  {
    name: "M. Shruthi",
    role: "Product Manager",
    bio: "AgriTech product specialist focused on field usability",
    avatar: "MS",
  },
  {
    name: "Y. Srithika",
    role: "Product Manager",
    bio: "AgriTech product specialist focused on field usability",
    avatar: "YS",
  },
  {
    name: "G. Siri",
    role: "Product Manager",
    bio: "AgriTech product specialist focused on field usability",
    avatar: "GS",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Multidisciplinary team combining AI, veterinary science, and product expertise
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 text-center card-shadow hover-lift">
                {/* Avatar */}
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground">
                  {member.avatar}
                </div>

                <h3 className="mb-1 text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-earth">{member.role}</p>
                <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
                    aria-label={`GitHub profile of ${member.name}`}
                  >
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
