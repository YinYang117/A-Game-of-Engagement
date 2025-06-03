import '../../css/pages/home.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Section = ({ children, className }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
        <motion.section
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.6, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
};

const Home = () => {
    return (
        <main className="home">
            <Section className="intro">
                <h1>I Like Helping People</h1>
                <>
                    <p>That’s what I've always been about.</p>
                    <p>I started as a healer, helping people through massage to physically heal, restoring motion, and reducing pain, giving them a chance to feel like themselves again.</p>
                    <p>Later, I would teach massage and, until quite recently, I also taught code. There, I fell in love with the "aha!" moment when something confusing or complex clicked and made sense.</p>
                    <p>Now I help people by building visionary software—sites and systems that are easy to use, beautiful to look at, and designed with people in mind.</p>
                    <p>I’ve done a lot of different things. But at the heart of it all is one idea: Helping people feels good.</p>
                </>
            </Section>

            <Section className="systems-mindset">
                <h2>A Systems Mindset</h2>
                <>
                    <p>Massage taught me to see where something’s off—even if it’s not where the pain is. It was my goal to help people get as much long lasting change as possible. That lead me to working through the body as a whole. To address the integrity of the whole.</p>
                    <p>Debugging code is much the same. </p>
                    <p>When you understand the whole system you know that you don't need patch jobs. You need integrity in the system. All parts function as one (or all parts as a whole, functioning as a whole).</p>
                </>
            </Section>

            <Section className="teaching-and-leading">
                <h2>Teaching and Leading</h2>
                <>
                    <p>I didn’t just want to be good at code—I wanted to experience and share that growth with others. </p>
                    <p>While learning, explaining tough ideas in simple ways became one of my favourite things.</p>
                    <p>Pair programming became one of my favourite experiences.</p>
                    <p>You don’t just solve bugs together—you learn to speak clearly, listen carefully, and build shared understanding.</p>
                    <p>It showed me something important: Helping isn’t just knowledge or giving answers.</p>
                    <p>It’s creating space where others can struggle and thrive.</p>
                </>
            </Section>

            <Section className="untangling-complexity">
                <h2>Untangling Complexity</h2>
                <>
                    <p>Whether it’s a frozen shoulder or a messy codebase—</p>
                    <p>I love that moment when things **click**.</p>
                    <p>When you find a thread, follow it, untangle the knots…  </p>
                    <p>And suddenly the whole thing makes sense.</p>
                    <p>That’s a great moment I work towards.</p>
                </>
            </Section>

            <Section className="design-for-humans">
                <h2>Design for Humans</h2>
                <>
                    <p>I build with The users and The team in mind.</p>
                    <p>If something’s hard to read, I clean it up.  </p>
                    <p>If it’s confusing to use, I redesign it.  </p>
                    <p>If it works but feels clunky, I bring quality of life.</p>
                    <p>Clean code, clear flows, good design—  </p>
                    <p>These aren’t extras. They’re the way I show respect to the people who will touch this after me.</p>
                </>
            </Section>

            <Section className="living-practice">
                <h2>A Living Practice</h2>
                <>
                    <p>You can see all of this in my GitHub.  </p>
                    <p>It’s a record of how I think, how I build, and how I get better.</p>
                    <p>This site is part of that practice.  </p>
                    <p>Built by hand, made with care.  </p>
                    <p>It doesn’t just show what I’ve done—it shows how I **do**.</p>
                </>
            </Section>

            <Section className="closing">
                <blockquote>
                    “Helping others is what guides me—Whether I’m healing, teaching, or building.”
                </blockquote>
                <p>Ryan Schneider | Slcryan2010@gmail.com | Let’s work together</p>
            </Section>
        </main>
    );
}

export default Home;