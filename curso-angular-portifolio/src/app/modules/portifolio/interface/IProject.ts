import { ILink } from "./ILink";

export interface IProject{
    src: string,
    alt: string,
    title: string,
    with: string,
    height: string,
    description: string,
    links: ILink[]
}