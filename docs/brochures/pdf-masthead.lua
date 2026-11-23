-- Pandoc filter for DialTone.Med sheets (LaTeX output only).
--   # DialTone.Med <audience> {.marketing-title}  -> branded masthead
--   [text]{.lead}                                 -> lead line
--   ::: note / ::: cta                            -> source note / call-to-action band

function Header(header)
  if FORMAT:match('latex') and header.classes:includes('marketing-title') then
    local title = pandoc.utils.stringify(header.content)
    local audience = title:match('^DialTone%.Med%s+(.+)$')
    if audience then
      return pandoc.RawBlock('latex', string.format('\\DialToneMedMasthead{%s}', audience))
    end
  end
  return nil
end

function Span(span)
  if FORMAT:match('latex') and span.classes:includes('lead') then
    local out = { pandoc.RawInline('latex', '\\DTMLead{') }
    for _, inline in ipairs(span.content) do
      out[#out + 1] = inline
    end
    out[#out + 1] = pandoc.RawInline('latex', '}')
    return out
  end
  return nil
end

local environments = { note = 'DTMNote', cta = 'DTMCta' }

function Div(div)
  if not FORMAT:match('latex') then
    return nil
  end
  for class, env in pairs(environments) do
    if div.classes:includes(class) then
      local out = { pandoc.RawBlock('latex', '\\begin{' .. env .. '}') }
      for _, block in ipairs(div.content) do
        out[#out + 1] = block
      end
      out[#out + 1] = pandoc.RawBlock('latex', '\\end{' .. env .. '}')
      return out
    end
  end
  return nil
end
