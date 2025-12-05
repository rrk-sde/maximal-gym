"use client";

import { use } from "react";
import CoachForm from "../../CoachForm";

export default function EditCoachPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    return <CoachForm coachId={id} />;
}
