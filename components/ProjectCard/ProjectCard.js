import React from 'react';
import { ProjectCardContainer,ProjectLink, ProjectCardContent, ProjectCardDescription, ProjectImagePreview ,TechnologiesSpan} from './ProjectCard.styles';
import Image from 'next/image';
import { motion } from 'framer-motion';




const ProjectCard = ({ title, url, img, repository, technologies, description, index,variants,custom,animations }) => {
    return (
        <ProjectCardContainer  animations={animations} variants={variants} custom={custom} key={index} >
        <ProjectCardContent>
                <h4>{title}</h4>
                <ProjectImagePreview src={img} alt={title} quality='50' priority responsive="true" height={200} width={350} />
                <ProjectCardDescription>
                    <p>Tecnologías :</p>
                    <ul>{technologies.map((el, index) => <TechnologiesSpan key={index} index={index}><p>{el}</p></TechnologiesSpan>)}</ul>
                    <p dangerouslySetInnerHTML={{__html:description}} />
                </ProjectCardDescription>
                <ProjectLink>
                    <motion.a href={repository} whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 250 }} target='_blank' rel="noreferrer">
                        <span>
                            <Image responsive="true" alt="github icon"  src='/github-icon.svg' width={30} height={30} />
                        </span>
                    </motion.a >
                    <motion.a  href={url} target='_blank' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 250 }} rel="noreferrer">
                        <span>
                            <Image responsive="true"  alt="web icon" src='/web-icon.svg' width={30} height={30} />
                        </span>
                    </motion.a >
                </ProjectLink>
                
        </ProjectCardContent>
        </ProjectCardContainer>
    )
};

export default ProjectCard;
