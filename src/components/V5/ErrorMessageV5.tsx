import * as React from "react"
import generic from "../../data/generic"
import errorMessage from "./codeExamples/errorMessage"
import errorsMessage from "./codeExamples/errorsMessage"
import CodeArea from "../CodeArea"
import TabGroup from "../TabGroup"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"

export default ({
  api,
  currentLanguage,
}: {
  api: any
  currentLanguage: string
}) => {
  return (
    <div>
      <code className={typographyStyles.codeHeading}>
        <h2>
          ErrorMessage:{" "}
          <span className={typographyStyles.typeText}>Component</span>
        </h2>
      </code>

      {api.ErrorMessage.description}

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              <th width="90px">{generic.required[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>name</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>string</code>
              </td>
              <td>✓</td>
              <td>{api.ErrorMessage.table.name}</td>
            </tr>
            <tr>
              <td>
                <code>errors</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>object</code>
              </td>
              <td></td>
              <td>{api.ErrorMessage.table.errors}</td>
            </tr>
            <tr>
              <td>
                <code>message</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>
                  string | React.ReactElement
                </code>
              </td>
              <td></td>
              <td>{api.ErrorMessage.table.message}</td>
            </tr>
            <tr>
              <td>
                <code>as</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>
                  React.ElementType | string
                </code>
              </td>
              <td></td>
              <td>{api.ErrorMessage.table.as}</td>
            </tr>
            <tr>
              <td>
                <code>children</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>
                  (
                  {`{ message: string | React.ReactElement, messages?: Object}`}
                  ) =&gt; any
                </code>
              </td>
              <td></td>
              <td>{api.ErrorMessage.table.children}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TabGroup
        buttonLabels={["Single Error Message", "Multiple Error Messages"]}
      >
        <CodeArea
          rawData={errorMessage}
          url="https://codesandbox.io/s/react-hook-form-errormessage-pc2b6"
        />
        <CodeArea
          rawData={errorsMessage}
          url="https://codesandbox.io/s/react-hook-form-errormessage-multiple-error-messages-cis2m"
        />
      </TabGroup>
    </div>
  )
}
