import { Github, Twitter, ExternalLink, Bot, History, LucideBot } from "lucide-react";
import { Link } from "react-router-dom";

export function DocHeader() {
  return (
    <div className="sticky w-full h-full top-0 z-10 backdrop-blur-lg bg-background border-b flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        {/* <img 
          src="/uploads/59bd4c24-30eb-4218-ace0-38591d64b014.png" 
          alt="Logo" 
          className="h-12 w-auto" // Increased from h-8 to h-12
        /> */}
        <div className="flex items-center">
          <img src="./uploads/logo-checkcle.ico" alt="checkcle-logo" className="h-10 w-auto" />
          {/* <span className="bg-green-500 px-3 py-2 font-bold text-xl rounded text-white">C</span> */}
          <h1 className="text-2xl font-bold bg-clip-text from-primary">CheckCle</h1>
        </div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Documentation
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/operacle/checkcle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://x.com/tlengoss"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href="https://checkcle.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="h-5 w-5" />
          <span className="sr-only">Website</span>
        </a>
        <a
          href="https://discord.gg/xs9gbubGwX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Bot className="h-5 w-5" />
          <span className="sr-only">Discord</span>
        </a>
        
        <Link
          to="/changelog"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <History className="h-5 w-5" />
          <span className="sr-only">Changelog</span>
        </Link>
      </div>
    </div>
  );
}