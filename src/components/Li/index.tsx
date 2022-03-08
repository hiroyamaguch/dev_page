import { LiHTMLAttributes, useRef } from 'react';
import Image from 'next/image';

import { HeaderContent, FooterContent } from './styles';

interface ITech {
  name: string;
  file: string;
}

interface InputProps extends LiHTMLAttributes<HTMLLIElement> {
  logoFile: string;
  description: string;
  projectDate: string;
  techs: ITech[];
  applicationURL: string;
  companyName: string;
}

export function Li({
  logoFile,
  description = '',
  projectDate,
  techs,
  applicationURL,
  companyName,
  ...rest
}: InputProps) {
  const liRef = useRef<HTMLLIElement>(null);

  return (
    <li ref={liRef} {...rest}>
      <HeaderContent>
        <Image
          src={`/assets/projects/${logoFile}.svg`}
          alt={companyName}
          width={64}
          height={64}
        />

        <p>{projectDate}</p>
      </HeaderContent>

      <h3>{companyName}</h3>

      <p>{description}</p>

      <FooterContent>
        <div>
          {techs.map(tech => (
            <Image
              src={`/assets/techs/${tech.file}.svg`}
              alt={tech.name}
              width={40}
              height={40}
              key={tech.name}
            />
          ))}
        </div>

        <a href={applicationURL} target="_blank" rel="noopener noreferrer">
          Ver aplicação
        </a>
      </FooterContent>
    </li>
  );
}

export default Li;
