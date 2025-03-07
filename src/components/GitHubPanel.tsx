
import React, { useState } from 'react';
import { Github, GitPullRequest, Star, GitCommit, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

interface ContributionDay {
  level: 0 | 1 | 2 | 3 | 4; // 0 = no contribution, 4 = most contributions
  date: string;
}

interface GitHubStats {
  repositories: number;
  pullRequests: number;
  stars: number;
  commits: number;
  issues: number;
}

const GitHubPanel: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  
  // Mock data for the contribution graph (would be fetched from GitHub API in real implementation)
  const generateMockContributions = (): ContributionDay[] => {
    const contributions: ContributionDay[] = [];
    const daysInYear = 52 * 7; // Approx. days to show in contribution panel
    
    for (let i = 0; i < daysInYear; i++) {
      // Randomly assign contribution levels, with higher chance of 0 (no contribution)
      const rand = Math.random();
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      
      if (rand > 0.8) level = 1;
      if (rand > 0.9) level = 2;
      if (rand > 0.95) level = 3;
      if (rand > 0.98) level = 4;
      
      const date = new Date();
      date.setDate(date.getDate() - (daysInYear - i));
      
      contributions.push({
        level,
        date: date.toISOString().split('T')[0]
      });
    }
    
    return contributions;
  };
  
  const mockContributions = generateMockContributions();
  
  const mockStats: GitHubStats = {
    repositories: 0,
    pullRequests: 0,
    stars: 210,
    commits: 0,
    issues: 0
  };
  
  const getLevelColor = (level: number) => {
    switch(level) {
      case 1: return 'bg-electric-blue/30';
      case 2: return 'bg-electric-blue/60';
      case 3: return 'bg-electric-blue/80';
      case 4: return 'bg-electric-blue';
      default: return 'bg-muted';
    }
  };
  
  const handleConnect = () => {
    // In a real implementation, this would initiate OAuth flow with GitHub
    setConnected(true);
  };
  
  return (
    <div className="w-full bg-deep-charcoal rounded-xl p-6 glass-effect glow-border">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-text-primary">Contribution activity</h3>
        
        {connected ? (
          <div className="relative">
            <select 
              className="bg-muted text-text-primary px-4 py-2 rounded-lg appearance-none pr-10 border border-electric-blue/30 focus:border-electric-blue focus:outline-none"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
            >
              {[2025, 2024, 2023, 2022, 2021].map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-electric-blue pointer-events-none">
              ▼
            </div>
          </div>
        ) : (
          <Button 
            className="bg-electric-blue hover:bg-electric-blue/80 text-white flex items-center gap-2"
            onClick={handleConnect}
          >
            <Github size={18} />
            Connect GitHub
          </Button>
        )}
      </div>
      
      {connected ? (
        <>
          <div className="flex justify-between items-center text-sm text-text-secondary mb-2">
            <span>Less</span>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-muted rounded-sm"></span>
              <span className="w-3 h-3 bg-electric-blue/30 rounded-sm"></span>
              <span className="w-3 h-3 bg-electric-blue/60 rounded-sm"></span>
              <span className="w-3 h-3 bg-electric-blue/80 rounded-sm"></span>
              <span className="w-3 h-3 bg-electric-blue rounded-sm"></span>
            </div>
            <span>More</span>
          </div>
          
          <div className="mb-8 w-full overflow-hidden">
            <div className="grid grid-cols-52 gap-1">
              {Array.from({ length: 7 }).map((_, rowIndex) => (
                <div key={`row-${rowIndex}`} className="flex flex-col gap-1">
                  {mockContributions.slice(rowIndex * 52, (rowIndex + 1) * 52).map((day, colIndex) => (
                    <div 
                      key={`${rowIndex}-${colIndex}`}
                      className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)}`}
                      title={`${day.date}: ${day.level} contributions`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-2">
                <Github className="text-electric-blue" size={24} />
              </div>
              <div className="text-2xl font-bold">{mockStats.repositories}</div>
              <div className="text-sm text-text-secondary">Repositories</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-2">
                <GitPullRequest className="text-electric-blue" size={24} />
              </div>
              <div className="text-2xl font-bold">{mockStats.pullRequests}</div>
              <div className="text-sm text-text-secondary">Pull Requests</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-2">
                <Star className="text-electric-blue" size={24} />
              </div>
              <div className="text-2xl font-bold">{mockStats.stars}+</div>
              <div className="text-sm text-text-secondary">Stars Earned</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-2">
                <GitCommit className="text-electric-blue" size={24} />
              </div>
              <div className="text-2xl font-bold">{mockStats.commits}</div>
              <div className="text-sm text-text-secondary">Commits</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-2">
                <MessageSquare className="text-electric-blue" size={24} />
              </div>
              <div className="text-2xl font-bold">{mockStats.issues}</div>
              <div className="text-sm text-text-secondary">Issues</div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-4">
            <Github className="text-electric-blue" size={36} />
          </div>
          <h4 className="text-xl font-bold mb-2">Connect your GitHub account</h4>
          <p className="text-text-secondary max-w-md mb-6">
            Link your GitHub profile to display your contributions, repositories, stars, and more.
          </p>
          <Button 
            className="bg-electric-blue hover:bg-electric-blue/80 text-white flex items-center gap-2"
            onClick={handleConnect}
          >
            <Github size={18} />
            Connect with GitHub
          </Button>
        </div>
      )}
    </div>
  );
};

export default GitHubPanel;
