import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

export default function location() {
    const colors = ["foreground", "primary", "secondary", "success", "warning", "danger"];

    return (
        <div className="flex flex-col flex-wrap gap-4">
            {colors.map((color ) => (
                <Breadcrumbs key={color} color={color}>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Music</BreadcrumbItem>
                    <BreadcrumbItem>Artist</BreadcrumbItem>
                    <BreadcrumbItem>Album</BreadcrumbItem>
                    <BreadcrumbItem>Song</BreadcrumbItem>
                </Breadcrumbs>
            ))}
        </div>
    );
}