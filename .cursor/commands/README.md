# ResearchKit with Cursor

This directory contains ResearchKit slash commands for Cursor AI editor.

## About Cursor

Cursor is an AI-powered code editor built on VS Code with integrated AI assistance.

## Slash Commands

Use these commands in Cursor's AI chat:

- `/researchkit.constitution` - Define research methodology and standards
- `/researchkit.plan` - Create a structured research plan
- `/researchkit.execute` - Execute research with proper documentation
- `/researchkit.synthesize` - Generate comprehensive research report
- `/researchkit.sources` - Manage bibliography and citations

## ResearchKit Integration

When working on research projects:
1. Use the `.researchkit/` directory structure
2. Follow the research workflow: Plan → Execute → Synthesize
3. Maintain proper citations in `sources.md`
4. Document findings in `findings.md`
5. Create synthesis reports in `synthesis.md`

## Research Commands

Run these bash scripts to manage your research:

```bash
# Create a new research plan
bash .researchkit/scripts/bash/plan.sh "Research Topic"

# Set up execution
bash .researchkit/scripts/bash/execute.sh

# Generate synthesis
bash .researchkit/scripts/bash/synthesize.sh
```


## Using Cursor for Research

Cursor's AI can help with:
- Structuring research documents
- Formatting citations consistently
- Summarizing research findings
- Generating literature review outlines
- Analyzing research data

### Tips

- Use the slash commands above for guided research workflows
- Use Cursor's chat to ask about citation formats
- Highlight text and ask Cursor to refine or summarize
- Use Cursor to help maintain consistent document structure
- Ask Cursor to help verify citation completeness
