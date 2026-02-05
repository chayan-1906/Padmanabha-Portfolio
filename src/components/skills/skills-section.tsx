import {Suspense} from "react";
import {Section} from "@/types/section";
import {SkillsClient} from "./skills-client";
import {GroupedSkillCategory, SkillItem, SkillsSectionProps} from "@/types/skills";

async function SkillsSection({sections, skillsData}: SkillsSectionProps) {
    const skillsSection = sections.find((section: Section) => section.name === 'Skills');

    if (!skillsSection || !skillsData.length) {
        return null;
    }

    const groupedSkillsMap: Record<string, GroupedSkillCategory> = {};

    skillsData.forEach((skill: SkillItem) => {
        if (!skill.category) {
            console.warn('Skill missing category:', skill);
            return;
        }

        const categoryKey = skill.category.title?.toLowerCase();

        if (!categoryKey) {
            console.warn('Category missing title:', skill.category);
            return;
        }

        if (!groupedSkillsMap[categoryKey]) {
            groupedSkillsMap[categoryKey] = {
                title: skill.category.title,
                color: skill.category.color,
                gradient: skill.category.gradient,
                icon: skill.category.icon,
                order: skill.category.order,
                items: [],
            };
        }

        groupedSkillsMap[categoryKey].items.push({
            name: skill.name,
            level: skill.level,
            icon: skill.icon,
        });
    });

    const sortedCategories = Object.entries(groupedSkillsMap)
        // .sort(([, a], [, b]) => a.order - b.order)
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {} as Record<string, GroupedSkillCategory>);

    return (
        <Suspense fallback={null}>
            <SkillsClient skillsSection={skillsSection} skills={sortedCategories}/>
        </Suspense>
    );
}

export {SkillsSection};
