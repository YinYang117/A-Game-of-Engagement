import '../../css/pages/home.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { H1, H2, Subtitle, P, Nav, Card } from "../../components/typography"


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
                <H1 className="">I Like Helping People</H1>
                <>
                    <P>That’s what I've always been about.</P>
                    <P>I started as a healer, helping people through massage to physically heal, restoring motion, and reducing pain, giving them a chance to feel like themselves again.</P>
                    <P>Later, I would teach massage and, until quite recently, I also taught code. There, I fell in love with the "aha!" moment when something confusing or complex clicked and made sense.</P>
                    <P>Now I help people by building visionary software—sites and systems that are easy to use, beautiful to look at, and designed with people in mind.</P>
                    <P>I’ve done a lot of different things. But at the heart of it all is one idea: Helping people feels good.</P>
                </>
            </Section>

            <Section className="systems-mindset">
                <H2>A Systems Mindset</H2>
                <>
                    <P>Massage taught me to see where something’s off—even if it’s not where the pain is. It was my goal to help people get as much long lasting change as possible. That lead me to working through the body as a whole. To address the integrity of the whole.</P>
                    <P>Debugging code is much the same. </P>
                    <P>When you understand the whole system you know that you don't need patch jobs. You need integrity in the system. All parts function as one (or all parts as a whole, functioning as a whole).</P>
                </>
            </Section>

            <Section className="teaching-and-leading">
                <H2>Teaching and Leading</H2>
                <>
                    <P>I didn’t just want to be good at code—I wanted to experience and share that growth with others. </P>
                    <P>While learning, explaining tough ideas in simple ways became one of my favourite things.</P>
                    <P>Pair programming became one of my favourite experiences.</P>
                    <P>You don’t just solve bugs together—you learn to speak clearly, listen carefully, and build shared understanding.</P>
                    <P>It showed me something important: Helping isn’t just knowledge or giving answers.</P>
                    <P>It’s creating space where others can struggle and thrive.</P>
                </>
            </Section>

            <Section className="untangling-complexity">
                <H2>Untangling Complexity</H2>
                <>
                    <P>Whether it’s a frozen shoulder or a messy codebase—</P>
                    <P>I love that moment when things **click**.</P>
                    <P>When you find a thread, follow it, untangle the knots…  </P>
                    <P>And suddenly the whole thing makes sense.</P>
                    <P>That’s a great moment I work towards.</P>
                </>
            </Section>

            <Section className="design-for-humans">
                <H2>Design for Humans</H2>
                <>
                    <P>I build with The users and The team in mind.</P>
                    <P>If something’s hard to read, I clean it up.  </P>
                    <P>If it’s confusing to use, I redesign it.  </P>
                    <P>If it works but feels clunky, I bring quality of life.</P>
                    <P>Clean code, clear flows, good design—  </P>
                    <P>These aren’t extras. They’re the way I show respect to the people who will touch this after me.</P>
                </>
            </Section>

            <Section className="living-practice">
                <H2>A Living Practice</H2>
                <>
                    <P>You can see all of this in my GitHub.  </P>
                    <P>It’s a record of how I think, how I build, and how I get better.</P>
                    <P>This site is part of that practice.  </P>
                    <P>Built by hand, made with care.  </P>
                    <P>It doesn’t just show what I’ve done—it shows how I **do**.</P>
                </>
            </Section>

            <Section className="closing">
                <blockquote className="font-card">
                    “Helping others is what guides me—Whether I’m healing, teaching, or building.”
                </blockquote>
                <P>Ryan Schneider | Slcryan2010@gmail.com | Let’s work together</P>
            </Section>
        </main>
    );
}


export default Home;