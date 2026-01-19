import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { Badge } from "@/components/ui/badge";



type Education = (typeof RESUME_DATA)["education"][number];

interface EducationPeriodProps {
  start: Education["start"];
  end: Education["end"];
}

/**
 * Displays the education period in a consistent format
 */
function EducationPeriod({ start, end }: EducationPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      title={`Period: ${start} to ${end}`}
    >
      {start} - {end}
    </div>
  );
}

interface EducationItemProps {
  education: Education;
}

/**
 * Individual education card component
 */
function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree, gpa } = education;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          {/* 左侧：学校名 + Badge */}
          <div className="flex items-center gap-x-2">
            <h3
              className="font-semibold leading-none"
              id={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {school}
            </h3>

            {education.badge && (
              <Badge
                variant="secondary"
                className="rounded-md px-1 py-0.5 text-xs font-mono font-semibold leading-tight"
              >
                {education.badge}
              </Badge>
            )}
          </div>
          {/* 右侧：时间 */}
          <EducationPeriod start={start} end={end} />
        </div>
      </CardHeader>

      <CardContent
        className="mt-2 text-foreground/80 print:text-[12px]"
        aria-labelledby={`education-${school
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
       <div>{degree}</div>
      {gpa && (
        <div className="mt-1 text-xs">
          GPA: {gpa}
        </div>
      )}
      </CardContent>
    </Card>
  );
}

interface EducationListProps {
  education: readonly Education[];
}

/**
 * Main education section component
 * Renders a list of education experiences
 */
export function Education({ education }: EducationListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="education-section">
        Education
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="education-section"
      >
        {education.map((item) => (
          <article key={item.school}>
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
